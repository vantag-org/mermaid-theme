import type { ViteUserConfig } from 'astro'
import type { MermaidConfig } from './config'

export function vitePluginStarlightThemeBlack(config: MermaidConfig): VitePlugin {
    const moduleId = 'virtual:mermaid-config'
    const resolvedModuleId = `\0${moduleId}`
    const moduleContent = `export default ${JSON.stringify(config)}`

    return {
        name: 'vite-plugin-mermaidsl',
        load(id) {
            return id === resolvedModuleId ? moduleContent : undefined
        },
        resolveId(id) {
            return id === moduleId ? resolvedModuleId : undefined
        },
    }
}

type VitePlugin = NonNullable<ViteUserConfig['plugins']>[number]