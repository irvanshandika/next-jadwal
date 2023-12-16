"use client";
import React, { SyntheticEvent, useState } from "react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { Card, CardBody, Input, Button } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Tambah Jadwal",
};
export default function FormJadwal() {
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);

    try {
      await fetch("https://pemrograman.vercel.app/api/jadwal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hari: hari,
          waktu: waktu,
          mataKuliah: mataKuliah,
          ruangan: ruangan,
        }),
      });

      setHari("");
      setWaktu("");
      setMataKuliah("");
      setRuangan("");
      router.push("/jadwal-pengganti");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsMutating(false);
    }
  }
  return (
    <>
      <Card className="lg:mx-48 mx-2 my-10">
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Input label="Hari" className="my-4" placeholder="Masukkan Hari" value={hari} onChange={(e) => setHari(e.target.value)} required />
            <Input label="Waktu" className="my-4" placeholder="Masukkan Waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} required />
            <Input label="Mata Kuliah" className="my-4" placeholder="Masukkan Mata Kuliah" value={mataKuliah} onChange={(e) => setMataKuliah(e.target.value)} required />
            <Input label="Ruangan" className="my-4" placeholder="Masukkan Ruangan" value={ruangan} onChange={(e) => setRuangan(e.target.value)} required />
            {!isMutating ? (
              <Button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white">
                Submit
              </Button>
            ) : (
              <Button type="button" className="btn loading">
                Menyimpan...
              </Button>
            )}
          </form>
        </CardBody>
      </Card>
    </>
  );
}
