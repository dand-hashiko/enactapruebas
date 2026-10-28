/**
 * Typography Architecture & Controller (SoC Pattern)
 *
 * Provides a centralized Font Management API.
 * Enables runtime font editing, headless context switches,
 * and effortless long-term maintenance of the typography system.
 */

export interface TypographyTheme {
  heading: string;
  body: string;
  mono: string;
  script: string;
}

export class TypographyManager {
  private static defaultTheme: TypographyTheme = {
    heading: "'BBH Bartle', sans-serif",
    body: "'Share Tech Mono', monospace",
    mono: "'Share Tech Mono', monospace",
    script: "'Caveat', cursive, sans-serif",
  };

  private static currentTheme: TypographyTheme = {
    ...TypographyManager.defaultTheme,
  };

  /**
   * Returns current active font configuration.
   */
  public static getTheme(): TypographyTheme {
    return { ...this.currentTheme };
  }

  /**
   * Applies font custom properties directly to documentElement at runtime.
   */
  public static apply(themeOverrides: Partial<TypographyTheme>): void {
    this.currentTheme = {
      ...this.currentTheme,
      ...themeOverrides,
    };

    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (this.currentTheme.heading) {
        root.style.setProperty("--font-heading", this.currentTheme.heading);
      }
      if (this.currentTheme.body) {
        root.style.setProperty("--font-body", this.currentTheme.body);
        root.style.setProperty("--font-inter", this.currentTheme.body);
      }
      if (this.currentTheme.mono) {
        root.style.setProperty("--font-mono", this.currentTheme.mono);
        root.style.setProperty("--font-jetbrains-mono", this.currentTheme.mono);
      }
      if (this.currentTheme.script) {
        root.style.setProperty("--font-script", this.currentTheme.script);
      }
    }
  }

  /**
   * Updates heading font (e.g. 'BBH Bartle')
   */
  public static setHeadingFont(fontFamily: string): void {
    this.apply({ heading: fontFamily });
  }

  /**
   * Updates body/content font (e.g. 'Share Tech Mono')
   */
  public static setBodyFont(fontFamily: string): void {
    this.apply({ body: fontFamily, mono: fontFamily });
  }

  /**
   * Resets typography to default Enacta design system tokens.
   */
  public static reset(): void {
    this.apply(this.defaultTheme);
  }
}
