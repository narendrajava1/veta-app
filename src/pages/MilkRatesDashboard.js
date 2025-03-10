import { useSelector } from 'react-redux';
import DataTable from '../utils/DataTable';
import React from 'react';
import MilkDataForm from '../components/MilkDataForm';
const data = [
  { id: 1, milkCategory: 'John Doe', price: 28, status: 'USA' },
  { id: 2, milkCategory: 'Jane Smith', price: 34, status: 'Canada' },
  { id: 3, milkCategory: 'Sam Green', price: 25, status: 'UK' },
  { id: 4, milkCategory: 'Emily Brown', price: 30, status: 'Australia' }
];

const ratesColumns = ['id', 'milkCategory', 'quantity', 'price', 'status'];
export const RateDashBoard = () => {
  const { value, loading, status } = useSelector((state) => state.ratesManage);
  return (
    <div>
      <h2>Milk Rate Dashboard</h2>
      <MilkDataForm />
      <DataTable data={data} columns={ratesColumns} />
    </div>
  );
};
