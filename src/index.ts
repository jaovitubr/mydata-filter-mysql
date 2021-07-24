import rules from "./rules";
import * as clauses from "./clause";

export interface MySqlTransformerOptions {
    max_inline_functions?: number;
    scope?: string[][];
    clause?: "WHERE" | "ORDER";
    features?: string[];
    root_features?: string[];
}

export class MySqlTransformer {
    inline_functions = 0;
    offset = -1;
    features: string[] = [];
    root_features: string[] = [];

    constructor(public options: MySqlTransformerOptions = {}) {
        const clause = this.options.clause ? clauses[this.options.clause] : undefined;

        this.root_features = [...(clause?.root_features || []), ...(this.options.root_features || [])];
        this.features = [...(clause?.features || []), ...(this.options.features || [])];
    }

    transform(rule: any) {
        this.offset++;

        if (Object.keys(rules).includes(rule.type)) {
            this.check_rule_feature(rule);

            return rules[rule.type](rule, this);
        } else {
            throw new Error(`Unhandled AST node type ${rule.type}`);
        }
    }

    check_rule_feature(rule: any) {
        if (this.offset === 0 && rule.type === "PARENTHESES") {
            this.check_rule_feature(rule.data);
            return;
        }

        if (
            (this.offset === 0 && this.root_features.length > 0 && !this.root_features.includes(rule.type)) ||
            (this.features.length > 0 && !this.features.includes(rule.type))
        ) {
            throw new Error(`Unexpected ${rule.type} token${rule.value ? `: ${rule.value}` : ""}`);
        }
    }

    escape_string(str: string) {
        if (!str) return str;

        return str
            .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "") // remove emojis
            .replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) { // escape
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "\"":
                    case "'":
                    case "\\":
                    case "%":
                        return "\\" + char;
                    default:
                        return char;
                }
            });
    }
}

export default MySqlTransformer;