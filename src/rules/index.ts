import FUNCTION_CALL from "./function_call";
import ASC from "./sorting/asc";
import DESC from "./sorting/desc";
import SORTING_LIST from "./sorting/sorting_list";
import IDENTIFIER from "./identifiers/identifier";
import IDENTIFIER_PATH from "./identifiers/identifier_path";
import PARENTHESES from "./parentheses";
import OR from "./operators/or";
import AND from "./operators/and";
import LT from "./operators/lt";
import GT from "./operators/gt";
import LE from "./operators/le";
import GE from "./operators/ge";
import NEQ from "./operators/neq";
import EQ from "./operators/eq";
import CONTAINS from "./operators/contains";
import CONTAINS_WORD from "./operators/contains_word";
import STARTS_WITH from "./operators/starts_with";
import ENDS_WITH from "./operators/ends_with";
import ADDITION from "./operators/addiction";
import SUBTRACTION from "./operators/subtraction";
import MULTIPLICATION from "./operators/multiplication";
import DIVISION from "./operators/division";
import STRING from "./data_types/string";
import NUMBER from "./data_types/number";
import BOOLEAN from "./data_types/boolean";

import { MySqlTransformer } from "..";

export interface IRule {
    (node: any, ctx: MySqlTransformer): string;
}

export interface IRuleObject {
    [key: string]: IRule
}

const Rules: IRuleObject = {
    ASC,
    DESC,
    SORTING_LIST,
    FUNCTION_CALL,
    IDENTIFIER,
    IDENTIFIER_PATH,
    PARENTHESES,
    OR,
    AND,
    LT,
    GT,
    LE,
    GE,
    NEQ,
    EQ,
    CONTAINS,
    CONTAINS_WORD,
    STARTS_WITH,
    ENDS_WITH,
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    STRING,
    NUMBER,
    BOOLEAN,
}

export default Rules;