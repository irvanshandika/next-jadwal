"use client";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React, { useState } from "react";

type Jadwal = {
  id: number;
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
};

async function getJadwal() {
  const res = await fetch("https://pemrograman.vercel.app/api/jadwal");
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
      <div className="lg:px-10 py-10">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn align="center">Hari</TableColumn>
            <TableColumn align="center">Waktu</TableColumn>
            <TableColumn align="center">Mata Kuliah</TableColumn>
            <TableColumn align="center">Ruangan</TableColumn>
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
      </div>
    </>
  );
};

export default JadwalData;
