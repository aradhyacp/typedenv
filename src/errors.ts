export class TypedEnvError extends Error {
    public readonly failures : string[]

    constructor(failures: string[]) {
        const message = [
            '\n✗ typedenv validation failed:\n',
            ...failures.map(f => `  → ${f}`),
            '\nFix the above environment variables before starting the app.\n'
        ].join('\n')

        super(message)
        this.name = 'TypedEnvError'
        this.failures = failures
        this.stack = undefined

        Object.setPrototypeOf(this, TypedEnvError.prototype)
    }
}