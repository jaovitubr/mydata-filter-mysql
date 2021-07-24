import { MySqlTransformer } from "../..";

export default function STRING(node: any, ctx: MySqlTransformer) {
    return `'${ctx.escape_string(node.value)}'`;
}