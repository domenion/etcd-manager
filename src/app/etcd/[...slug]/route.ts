import { NextApiRequest } from "next";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const url = "http://etcd.mvp.arctic.true.th/v3/";
    const token = "YWRtaW46WjY4I1tgJTRrNCgnSlhxJQ==";
    const response = await fetch(url + params.slug.join("/"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
    });
    if (response.status != 200) {
      return Response.json({
        error: response.statusText,
      });
    }
    const resp = await response.json();
    return Response.json(resp.node);
  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}
