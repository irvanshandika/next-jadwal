/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Link } from "@nextui-org/react";
import { jadwal } from "./data";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";

function TableJadwal() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(jadwal.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return jadwal.slice(start, end);
  }, [page, jadwal]);
  return (
    <div className="lg:mx-28 lg:my-[115px] md:my-[90px] sm:my-[90px]">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={(page) => setPage(page)} />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}>
        <TableHeader>
          <TableColumn align="center">Hari</TableColumn>
          <TableColumn align="center">Waktu</TableColumn>
          <TableColumn align="center">Mata Kuliah</TableColumn>
          <TableColumn align="center">Kelas</TableColumn>
          <TableColumn align="center">Dosen</TableColumn>
          <TableColumn align="center">Ruang</TableColumn>
          <TableColumn align="center">Zoom</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.IdKuliah}>
              <TableCell align="center">{item.Hari}</TableCell>
              <TableCell align="center">{item.Waktu}</TableCell>
              <TableCell align="center">{item.MataKuliah}</TableCell>
              <TableCell align="center">{item.Kelas}</TableCell>
              <TableCell align="center">{item.NamaDosen}</TableCell>
              <TableCell align="center">{item.Ruang}</TableCell>
              <TableCell align="center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Zoom</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Peringatan!</AlertDialogTitle>
                      <AlertDialogDescription>Untuk mengakses URL Zoom, diharuskan menggunakan akun students yang masih berstatus sebagai mahasiswa aktif di AMIKOM Yogyakarta</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction>
                        <Link href={item.ZoomURL} target="_blank">
                          Lanjutkan
                        </Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableJadwal;
