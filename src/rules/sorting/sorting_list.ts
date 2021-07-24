import { MySqlTransformer } from "../..";

export default function SORTING_LIST(node: any, ctx: MySqlTransformer) {
    return `${node.data.map((sub_node: any) => ctx.transform(sub_node)).join(", ")}`;
}