import { title } from "process";

export interface SlateImage {
  updated_at?: Date | string;
  id?: string;
  cid?: string;
  url: string;
  body?: string;
  name?: string;
  size?: number;
  type?: string;
  title?: string;
  author?: string;
  source?: string;
  ownerId?: string;
  blurhash?: string;
}

export interface Slate {
  id: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  slatename: string;
  data: {
    body: string;
    name: string;
    public?: boolean;
    layouts?: any;
    objects: SlateImage[];
  };
}

export async function getSlateByID(id: string): Promise<any> {}
export async function getSlateBySlug(slug: string): Promise<any> {}
export async function getAllSlates() {
  const res = await fetch("https://slate.host/api/v1/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "SLAfdf6543f-106b-4f12-bcdb-1283853dedaeTE",
    },
  });
  const json = await res.json();
  const slates: Slate[] = json.slates;
  const ret: SlateImage[] = [];
  for (let i = 0; i < slates.length; i++) {
    let updated_at: string = slates[i].updated_at;
    let slateimgs: SlateImage[] = slates[i].data.objects;
    for (let j = 0; j < slateimgs.length; j++) {
      let image: SlateImage = { ...slateimgs[j], updated_at };
      ret.unshift(image);
    }
  }
  return {
    props: {
      slates: ret,
    },
  };
}
