# Checklist of Angular Flex Features

## API for DOM Containers

_Key: `[optional]`,`<required param>`_

| Directive  | CSS Class   | Notes |
|------------|-------------|-------|
| `fxLayout` | `.fxLayout` |  `fxLayout-[inline]-<direction>-[wrap]`     |
| `fxLayoutAlign` | `.fxLayoutAlign`, `.fxLayoutAlign-cross` |  `.fxLayoutAlign-[cross]-<alignment>`|
| `fxLayoutGap` | `.fxLayoutGap` | Uses `--fx-layout-gap` |
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
| `fxFlex` | - | |
| `fxFlexOrder` | - | |
| `fxFlexOffset` | - | |
| `fxFlexAlign` | - | |
| `fxFlexill` | - | |
| `fxFill` | - | |
| `gdArea` | - | |
| `gdColumn` | - | |
| `gdRow` | - | |
| `gdGridAlign` | - | |

## API for any element

| Directive | CSS Class | Notes |
|-----------|-----------|-------|
| `fxHide` | `.fxHide` | `.fxHide-[lt | gt]-size` |
| `fxShow` | - | Would require knowing original display type |
| `ngClass` | - | TODO: Size-based conditional similar to fxHide |
| `ngStyle` | - | TODO as angular directive |
| `imgSrc` | n/a |  |