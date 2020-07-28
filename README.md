# eslint-config-metamo

###### ESlint + Prettier のルールセット
ちゃんと使える: React  
使える: Vue, Nuxt  
不明: node, TS

## Install

```
npm install -D eslint-config-metamo eslint prettier
```

## Usage

`.eslintrc`

```json
{
  "extends": ["eslint-config-metamo"]
}
```

### TypeScript

```json
{
  "extends": ["eslint-config-metamo","eslint-config-metamo/ts"]
}
```

### Vue + TypeScript

```json
{
  "extends": ["eslint-config-metamo/vue"]
}
```

### Nuxt + TypeScript

```json
{
  "extends": ["eslint-config-metamo/nuxt"]
}
```

### React + TypeScript

```json
{
  "extends": ["eslint-config-metamo/react"]
}
```