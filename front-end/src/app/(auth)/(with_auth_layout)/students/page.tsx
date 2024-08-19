// src/components/LoginPage.tsx
"use client";
import CustomButton from "@/components/customButton/page";
import CustomGrid from "@/components/customGrid/page";
import CreateOrEditStudents from "@/components/pages/students/create-or-edit-students/page";
import { FORMMODES } from "@/helper/constant";
import { Column } from "@/helper/interface";
import React, { useState } from "react";

const Student: React.FC = () => {
  const [mode, setMode] = useState<number>(1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = () => {
    setMode(FORMMODES.ADD)
  };

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <h1>Students</h1>
      {mode == FORMMODES.GRID ? (
        <>
          <CustomButton handleClick={handleClick} text="Add" />
          <CustomGrid
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            columns={columns}
          />
        </>
      ) : mode == FORMMODES.ADD ? (
        <CreateOrEditStudents />
      ) : null}
    </div>
  );
};

export default Student;
