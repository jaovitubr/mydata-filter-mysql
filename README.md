# OData Filter - Mysql Transformer
Postgre transformer for [odata-filter](https://www.npmjs.com/package/odata-filter) package

[![npm version](https://badge.fury.io/js/odata-filter-mysql.svg)](https://badge.fury.io/js/odata-filter-mysql)
[![GitHub issues](https://img.shields.io/github/issues/joaovitmac/odata-filter-mysql.svg)](https://github.com/joaovitmac/odata-filter-mysql/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/joaovitmac/odata-filter-mysql/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/joaovitmac/odata-filter-mysql.svg?style=social&label=Stars)](https://github.com/joaovitmac/odata-filter-mysql)
[![GitHub forks](https://img.shields.io/github/forks/joaovitmac/odata-filter-mysql.svg?style=social&label=Forks)](https://github.com/joaovitmac/odata-filter-mysql)

## Installation

```shell
npm install odata-filter-mysql
```

## Usage

Transform a filter string to a Mysql query

```javascript
import { ParseSync } from "odata-filter";
import MysqlTransformer from "odata-filter-mysql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

try {
    const query = ParseSync(filter, {
        transformer: new MysqlTransformer()
    });

    console.log(query); // (`user`.`username" = 'Ana') OR (`username` = 'Ana')
} catch (error) {
    console.error(error);
}
```

Transform a filter string to a Mysql query asynchronously

```javascript
import { ParseSync } from "odata-filter";
import MysqlTransformer from "odata-filter-mysql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

Parse(filter, {
    transformer: new MysqlTransformer()
}).then(query => {
    console.log(query); // (`user`.`username" = 'Ana') OR (`username` = 'Ana')
}).catch(error => {
    console.error(error);
});
```

## Constructor optional options

Name | Type | Description
------------ | ------------- | -------------
max_inline_functions | number | Define max inline call functions
scope | string[][] | Define scope with available identifiers

## Supported Inline Functions
Name | Arguments
------------ | -------------
ROUND | Number \| Identifier
CEIL | Number \| Identifier
FLOOR | Number \| Identifier
LOWER | String \| Identifier
UPPER | String \| Identifier
TRIM | String \| Identifier
CONTAINS | String \| Identifier, String \| Identifier \| Number
STARTS_WITH | String \| Identifier, String \| Identifier \| Number
ENDS_WITH | String \| Identifier, String \| Identifier \| Number
CONCAT | String \| Identifier \| Number, ...
YEAR | String \| Identifier
MONTH | String \| Identifier
HOUR | String \| Identifier
MINUTE | String \| Identifier
SECOND | String \| Identifier