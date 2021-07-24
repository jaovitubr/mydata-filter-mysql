import { MySqlTransformer } from "../..";

export default function ASC(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.data)} ASC`
}