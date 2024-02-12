"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { EditIcon } from "@icons/EditIcon";

type Jadwal = {
  id: number;
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
};

function EditJadwal(jadwal: Jadwal) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [hari, setHari] = useState(jadwal.hari);
  const [waktu, setWaktu] = useState(jadwal.waktu);
  const [mataKuliah, setMataKuliah] = useState(jadwal.mataKuliah);
  const [ruangan, setRuangan] = useState(jadwal.ruangan);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);

    try {
      await fetch(`https://jadwal-express.vercel.app/api/jadwal/${jadwal.id}`, {
        method: "PATCH",
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
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsMutating(false);
    }
  }
  return (
    <>
      <Button onPress={onOpen} size="sm" className="bg-green-500 hover:bg-green-300 text-white" endContent={<EditIcon />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Jadwal <span className="font-bold">{jadwal.mataKuliah}</span>
              </ModalHeader>
              <form onSubmit={handleUpdate}>
                <ModalBody>
                  <Input label="Hari" className="my-4" placeholder="Masukkan Hari" value={hari} onChange={(e) => setHari(e.target.value)} required />
                  <Input label="Waktu" className="my-4" type="time" placeholder="Masukkan Waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} required />
                  <Input label="Mata Kuliah" className="my-4" placeholder="Masukkan Mata Kuliah" value={mataKuliah} onChange={(e) => setMataKuliah(e.target.value)} required />
                  <Input label="Ruangan" className="my-4" placeholder="Masukkan Ruangan" value={ruangan} onChange={(e) => setRuangan(e.target.value)} required />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  {!isMutating ? (
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white">
                      Submit
                    </Button>
                  ) : (
                    <Button type="button" className="btn loading">
                      Menyimpan...
                    </Button>
                  )}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditJadwal;
