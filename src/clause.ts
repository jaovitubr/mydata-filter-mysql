export interface IClause {
    root_features: string[],
    features: string[]
}

export const WHERE: IClause = {
    root_features: [
        "OR",
        "AND",
        "LT",
        "GT",
        "LE",
        "GE",
        "NEQ",
        "EQ",

        "CONTAINS",
        "CONTAINS_WORD",
        "STARTS_WITH",
        "ENDS_WITH",

        "PARENTHESES",
        "IDENTIFIER_PATH",
        "IDENTIFIER",

        "FUNCTION_CALL",
    ],
    features: [
        "OR",
        "AND",
        "LT",
        "GT",
        "LE",
        "GE",
        "NEQ",
        "EQ",

        "CONTAINS",
        "CONTAINS_WORD",
        "STARTS_WITH",
        "ENDS_WITH",

        "ADDITION",
        "SUBTRACTION",
        "MULTIPLICATION",
        "DIVISION",

        "PARENTHESES",
        "IDENTIFIER_PATH",
        "IDENTIFIER",
        "BOOLEAN",
        "NUMBER",
        "STRING",

        "FUNCTION_CALL",
    ]
}

export const ORDER: IClause = {
    root_features: [
        "SORTING_LIST",
        "ASC",
        "DESC",

        "OR",
        "AND",
        "LT",
        "GT",
        "LE",
        "GE",
        "NEQ",
        "EQ",

        "CONTAINS",
        "CONTAINS_WORD",
        "STARTS_WITH",
        "ENDS_WITH",

        "PARENTHESES",
        "IDENTIFIER_PATH",
        "IDENTIFIER",

        "FUNCTION_CALL",
    ],
    features: [
        "SORTING_LIST",
        "ASC",
        "DESC",

        "OR",
        "AND",
        "LT",
        "GT",
        "LE",
        "GE",
        "NEQ",
        "EQ",

        "CONTAINS",
        "CONTAINS_WORD",
        "STARTS_WITH",
        "ENDS_WITH",

        "ADDITION",
        "SUBTRACTION",
        "MULTIPLICATION",
        "DIVISION",

        "PARENTHESES",
        "IDENTIFIER_PATH",
        "IDENTIFIER",
        "BOOLEAN",
        "NUMBER",
        "STRING",

        "FUNCTION_CALL",
    ]
}