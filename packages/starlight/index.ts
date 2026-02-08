import type { StarlightPlugin } from '@astrojs/starlight/types';
import path from 'path';
import { fileURLToPath } from 'url';
import { overrideComponents } from './libs/starlight';

export interface MermaidUserConfig {
  primaryColor?: string;
  fontFamily?: string;
}

export default function MermaidTheme(userConfig: MermaidUserConfig = {}): StarlightPlugin {
  const config = {
    primaryColor: userConfig.primaryColor ?? '#ff4c4c',
    fontFamily: userConfig.fontFamily ?? 'Inter, sans-serif',
  };

  return {
    name: 'mermaidsl',
    hooks: {
      'config:setup': ({ config, updateConfig, logger }) => {
        const cssPath = path.resolve(
          fileURLToPath(new URL('./styles/theme.css', import.meta.url)),
        );

        const fontsPath = path.resolve(
          fileURLToPath(new URL('./partials/assets/stylesheets/fonts.css', import.meta.url)),
        )

        updateConfig({
          customCss: [...(config.customCss ?? []), fontsPath, cssPath],
        });
      }

    }
  }
}