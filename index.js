export const createLambdaModuleHandler = (module) => async (event) => {
    const { prop, args } = event

    const module = await import(module)

    if (typeof module[prop] === 'function') {
        return await module[prop](...args)
    }

    return module[prop]
}
