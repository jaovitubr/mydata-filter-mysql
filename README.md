# myData Filter - Mysql Transformer
MySql transformer for [mydata-filter](https://www.npmjs.com/package/mydata-filter) package

[![npm version](https://badge.fury.io/js/mydata-filter-mysql.svg)](https://badge.fury.io/js/mydata-filter-mysql)
[![GitHub issues](https://img.shields.io/github/issues/joaovitmac/mydata-filter-mysql.svg)](https://github.com/joaovitmac/mydata-filter-mysql/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/joaovitmac/mydata-filter-mysql/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/joaovitmac/mydata-filter-mysql.svg?style=social&label=Stars)](https://github.com/joaovitmac/mydata-filter-mysql)
[![GitHub forks](https://img.shields.io/github/forks/joaovitmac/mydata-filter-mysql.svg?style=social&label=Forks)](https://github.com/joaovitmac/mydata-filter-mysql)

## Installation

```shell
npm install mydata-filter-mysql
```

## Usage

Transform a filter string to a Mysql query

```javascript
import { ParseSync } from "mydata-filter";
import MySqlTransformer from "mydata-filter-mysql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

try {
    const query = ParseSync(filter, {
        transformer: new MySqlTransformer()
    });

    console.log(query); // (`user`.`username" = 'Ana') OR (`username` = 'Ana')
} catch (error) {
    console.error(error);
}
```

Transform a filter string to a Mysql query asynchronously

```javascript
import { ParseSync } from "mydata-filter";
import MySqlTransformer from "mydata-filter-mysql";

const filter = `(user.username == "Ana") or (username == "Mari")`;

Parse(filter, {
    transformer: new MySqlTransformer()
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