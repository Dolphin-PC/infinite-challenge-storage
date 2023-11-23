import { DataType, getData } from "@/app/lib/firestore";

export default async function page() {
  const res = await getData();
  return (
    <div>
      meme
      {res.map((r: DataType) => (
        <p>{r.title}</p>
      ))}
    </div>
  );
}
