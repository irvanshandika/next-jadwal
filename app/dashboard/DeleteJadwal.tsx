"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "@icons/DeleteIcon";

type Jadwal = {
  id: number;
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
};

export default function DeleteJadwal(jadwal: Jadwal) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(jadwalId: number) {
    setIsMutating(true);
    try {
      await fetch(`https://pemrograman.vercel.app/api/jadwal/${jadwalId}`, {
        method: "DELETE",
      });
      setIsMutating(false);
      router.refresh();
      router.push("/dashboard"); // kembali ke halaman jadwal
    } catch (error) {
      console.error(error); // tampilkan kesalahan di konsol
      setIsMutating(false);
    }
  }
  return (
    <>
      <Button onPress={onOpen} color="danger" size="sm" endContent={<DeleteIcon />}>
        Delete
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <h1 className="font-medium text-lg">
                Apakah Kamu Yakin Menghapus <span className="font-bold">{jadwal.mataKuliah}</span> ?
              </h1>
              <Input required />
            </ModalBody>
            <ModalFooter>
              {!isMutating ? (
                <Button type="button" color="danger" onClick={() => handleDelete(jadwal.id)}>
                  Delete
                </Button>
              ) : (
                <Button type="button">Menghapus...</Button>
              )}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
