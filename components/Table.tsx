"use client";
import React, {useMemo} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Link} from "@nextui-org/react";
import {jadwal} from "./data";

function TableJadwal() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(jadwal.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return jadwal.slice(start, end);
  }, [page, jadwal]);
  return (
    <div className="lg:mx-28">
      <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
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
                <Link href={item.ZoomURL} target="_blank">Zoom</Link>
              </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}

export default TableJadwal;
