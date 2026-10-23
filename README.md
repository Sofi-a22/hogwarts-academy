# Hogwarts Academy — TypeScript Mini Project

A small terminal project to practice:

- Generics and generic constraints
- Utility types: `Pick`, `Omit`, `Partial`, `Record`, `Parameters`, `ReturnType`, `Extract`, `Exclude`
- Conditional types and `infer`
- Index signatures
- Type guards and discriminated unions
- Legacy TypeScript method decorators (`target`, `propertyKey`, `descriptor`)

## Requirements

- Node.js 18+ recommended
- npm

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

## Type-check

```bash
npm run typecheck
```

## Note about decorators

This project intentionally uses the legacy TypeScript decorator API so you can learn the three method-decorator arguments:
`target`, `propertyKey`, and `descriptor`. The project enables `experimentalDecorators` in `tsconfig.json`.
