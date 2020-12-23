import { slateAPIKey } from "private-api-keys";

export interface SlateImage {
  updated_at: string;
  id?: string;
  cid?: string;
  url: string;
  body?: string;
  name: string;
  size?: number;
  type?: string;
  title?: string;
  author?: string;
  source?: string;
  ownerId?: string;
  blurhash?: string;
  slatename: string;
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

export async function getSlateBySlug(slug: string) {
  let slates: Slate[] = await getAllSlates();
  for (let i = 0; i < slates.length; i++) {
    let slate: Slate = slates[i];
    if (slate.data.name === slug) {
      return slate;
    }
  }
  return null;
}
export async function getAllSlates() {
  const res = await fetch("https://slate.host/api/v1/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: slateAPIKey,
    },
  });
  const json = await res.json();
  const slates: Slate[] = json.slates;
  return slates;
}
export async function getHeaderSlateImages() {
  const res = await fetch("https://slate.host/api/v1/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: slateAPIKey,
    },
  });
  const json = await res.json();
  const slates: Slate[] = json.slates;
  const ret: SlateImage[] = [];
  for (let i = 0; i < slates.length; i++) {
    let updated_at: string = slates[i].updated_at;
    let slatename: string = slates[i].data.name;
    let slateimgs: SlateImage[] = slates[i].data.objects;
    if (slateimgs.length > 0) {
      let image: SlateImage = { ...slateimgs[0], updated_at, slatename };
      ret.push(image);
    }
  }
  console.log(ret);
  return ret;
}

export async function getAllSlateSlugs() {
  let slates: Slate[] = await getAllSlates();
  return {
    paths: slates.map((s) => ({
      params: { slug: s.data.name },
    })),
    fallback: false,
  };
}
