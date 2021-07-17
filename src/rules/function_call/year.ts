import { MySqlTransformer } from "../..";

export default function YEAR(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `YEAR(${ctx.transform(argument_node)})`;
}