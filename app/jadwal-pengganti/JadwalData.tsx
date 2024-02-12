"use client";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link, Button } from "@nextui-org/react";
import React, { useState } from "react";

type Jadwal = {
  id: number;
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
};

async function getJadwal() {
  const res = await fetch("https://jadwal-express.vercel.app/api/jadwal");
  const data = await res.json();
  return data;
}

// Perbaiki fungsi komponen agar dapat diakses dengan benar
const JadwalData: React.FC = () => {
  const [jadwal, setJadwal] = useState<Jadwal[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const jadwalData: Jadwal[] = await getJadwal();
      setJadwal(jadwalData);
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <>
      <div className="lg:mx-10 my-10">
        <div className="my-4">
          <Link href="/dashboard">
            <Button className="bg-blue-500 hover:bg-blue-400 text-white">Dashboard</Button>
          </Link>
        </div>
        {jadwal.length === 0 ? (
          <Table aria-label="Example empty table">
            <TableHeader>
              <TableColumn align="center" className="bg-zinc-200">
                Hari
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Waktu
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Mata Kuliah
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Ruangan
              </TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Horee Tidak Ada Jadwal Pengganti 🥳"}>{[]}</TableBody>
          </Table>
        ) : (
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn align="center" className="bg-zinc-200">
                Hari
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Waktu
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Mata Kuliah
              </TableColumn>
              <TableColumn align="center" className="bg-zinc-200">
                Ruangan
              </TableColumn>
            </TableHeader>
            <TableBody>
              {jadwal.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.hari}</TableCell>
                  <TableCell align="center">{item.waktu}</TableCell>
                  <TableCell align="center">{item.mataKuliah}</TableCell>
                  <TableCell align="center">{item.ruangan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
};

export default JadwalData;
