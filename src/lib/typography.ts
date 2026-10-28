/**
 * Typography Architecture & Controller (SoC Pattern)
 *
 * Categorized into 5 distinct text roles:
 * 1. titulos: Encabezados y títulos principales (h1-h6, nombres de planes, tarjetas)
 * 2. subtitulos: Subtítulos, descripciones de sección y lead copy
 * 3. botones: Botones interactivos, CTAs y disparadores de acción
 * 4. otros1: Badges, métricas numéricas, SLAs, chips técnicos y precios
 * 5. otros2: Texto de cuerpo general, viñetas de características, pie de página
 */

export type TypographyCategory =
  | "titulos"
  | "subtitulos"
  | "botones"
  | "otros1"
  | "otros2";

export interface TypographyCategoryConfig {
  fontFamily: string;
  letterSpacing?: string;
  textTransform?: "uppercase" | "none" | "capitalize" | "lowercase";
}

export interface TypographyThemeConfig {
  titulos: TypographyCategoryConfig;
  subtitulos: TypographyCategoryConfig;
  botones: TypographyCategoryConfig;
  otros1: TypographyCategoryConfig;
  otros2: TypographyCategoryConfig;
}

export class TypographyManager {
  private static defaultTheme: TypographyThemeConfig = {
    titulos: {
      fontFamily: "'BBH Bartle', sans-serif",
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
    },
    subtitulos: {
      fontFamily: "'Share Tech Mono', monospace",
      letterSpacing: "normal",
      textTransform: "none",
    },
    botones: {
      fontFamily: "'Share Tech Mono', monospace",
      letterSpacing: "0.02em",
      textTransform: "none",
    },
    otros1: {
      fontFamily: "'Share Tech Mono', monospace",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    otros2: {
      fontFamily: "'Share Tech Mono', monospace",
      letterSpacing: "normal",
      textTransform: "none",
    },
  };

  private static currentTheme: TypographyThemeConfig = {
    ...TypographyManager.defaultTheme,
  };

  /**
   * Retorna la configuración completa del sistema tipográfico.
   */
  public static getTheme(): TypographyThemeConfig {
    return { ...this.currentTheme };
  }

  /**
   * Retorna la configuración de una categoría específica.
   */
  public static getCategory(category: TypographyCategory): TypographyCategoryConfig {
    return { ...this.currentTheme[category] };
  }

  /**
   * Método genérico para actualizar cualquier categoría.
   */
  public static setCategory(
    category: TypographyCategory,
    config: Partial<TypographyCategoryConfig> | string
  ): void {
    const updated =
      typeof config === "string" ? { fontFamily: config } : config;
    this.currentTheme[category] = {
      ...this.currentTheme[category],
      ...updated,
    };
    this.syncDOM();
  }

  /**
   * Métodos dedicados por texto / categoría:
   */
  public static setTitulos(config: Partial<TypographyCategoryConfig> | string): void {
    this.setCategory("titulos", config);
  }

  public static setSubtitulos(config: Partial<TypographyCategoryConfig> | string): void {
    this.setCategory("subtitulos", config);
  }

  public static setBotones(config: Partial<TypographyCategoryConfig> | string): void {
    this.setCategory("botones", config);
  }

  public static setOtros1(config: Partial<TypographyCategoryConfig> | string): void {
    this.setCategory("otros1", config);
  }

  public static setOtros2(config: Partial<TypographyCategoryConfig> | string): void {
    this.setCategory("otros2", config);
  }

  /**
   * Aplica un conjunto de modificaciones al tema.
   */
  public static apply(overrides: Partial<TypographyThemeConfig>): void {
    this.currentTheme = {
      ...this.currentTheme,
      ...overrides,
    };
    this.syncDOM();
  }

  /**
   * Sincroniza variables CSS en :root en tiempo de ejecución.
   */
  public static syncDOM(): void {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    // Variables de las 5 categorías:
    root.style.setProperty("--font-titulos", this.currentTheme.titulos.fontFamily);
    root.style.setProperty("--font-subtitulos", this.currentTheme.subtitulos.fontFamily);
    root.style.setProperty("--font-botones", this.currentTheme.botones.fontFamily);
    root.style.setProperty("--font-otros1", this.currentTheme.otros1.fontFamily);
    root.style.setProperty("--font-otros2", this.currentTheme.otros2.fontFamily);

    // Compatibilidad retroactiva:
    root.style.setProperty("--font-heading", this.currentTheme.titulos.fontFamily);
    root.style.setProperty("--font-body", this.currentTheme.otros2.fontFamily);
    root.style.setProperty("--font-mono", this.currentTheme.otros1.fontFamily);
    root.style.setProperty("--font-inter", this.currentTheme.otros2.fontFamily);
    root.style.setProperty("--font-jetbrains-mono", this.currentTheme.otros1.fontFamily);
  }

  /**
   * Restablece todas las fuentes a los valores por defecto de Enacta.
   */
  public static reset(): void {
    this.currentTheme = { ...this.defaultTheme };
    this.syncDOM();
  }
}
