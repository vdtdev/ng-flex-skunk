# Checklist of Angular Flex Features

## API for DOM Containers

_Key: `[optional]`,`<required param>`_

| Directive  | CSS Class   | Notes |
|------------|-------------|-------|
| `fxLayout` | `.fsLayout` |  `fsLayout-[inline]-<direction>-[wrap]`     |
| `fxLayoutAlign` | `.fsLayoutAlign`, `.fsLayoutAlign-cross` |  `.fsLayoutAlign-[cross]-<alignment>`|
| `fxLayoutGap` | `.fsLayoutGap` | Uses `--fs-layout-gap` |
| `gdAlignColumns` | ? | Not documented |
| `gdAlignRows` | ? | Not documented |
| `gdAreas` | ? | Not documented |
| `gdAuto` | ? | Not documented |
| `gdColumns` | ? | Not documented |
| `gdRows` | ? | Not documented |
| `gdGap` | ? | Not documented |

## API for DOM Elements

| Directive  | CSS Class   | Notes |
|------------|-------------|-------|
| `fxFlex` | `.fsFlex` | Set value with `--fs-flex` |
| `fxFlexOrder` | `.fsFlexOrder` | Set order with `--fs-flex-order` |
| `fxFlexOffset` | `.fsFlexOffset` | Set offset with `--fs-flex-offset` |
| `fxFlexAlign` | `.fsFlexAlign` | `.fsFlexAlign-<alignment>` |
| `fxFlexill` | - | |
| `fxFill` | - | |
| `gdArea` | - | |
| `gdColumn` | - | |
| `gdRow` | - | |
| `gdGridAlign` | - | |

## API for any element

| Directive | CSS Class | Notes |
|-----------|-----------|-------|
| `fxHide` | `.fsHide` | `.fsHide-[lt/gt]-size` |
| `fxShow` | - | Would require knowing original display type |
| `ngClass` | - | TODO: Size-based conditional similar to fxHide |
| `ngStyle` | - | TODO as angular directive |
| `imgSrc` | n/a |  |