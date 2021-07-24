import { MySqlTransformer } from "../..";

export default function DESC(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.data)} DESC`
}