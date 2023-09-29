import { useState } from "react";
import TableHeader from "../TableHeader";
import TableRows from "../TableRows";

type TableProps<T, K extends keyof T> = {
  data: Array<any>;
};

const style = {
  borderCollapse: "collapse",
} as const;

/**
 * Table component that displays statistical data for a product.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects to calculate statistics for
 * @param {TableProps<T, K>} props - Props containing data and statistical values.
 * @returns {JSX.Element} - JSX element representing the table.
 */
const Table = <T, K extends keyof T>({
  data,
}: TableProps<T, K>): JSX.Element => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  // Get all unique keys from the data objects
  const allKeys = Array.from(
    data.reduce((keys, item) => {
      Object.keys(item)
        .filter((el) => el)
        .forEach((key) => keys.add(key));
      return keys;
    }, new Set())
  );

  // Define a function to handle changes in column filters
  const handleFilterChange = (columnName: string, value: string) => {
    // Update the 'filters' state by spreading the current state and setting the new value for the specified column
    setFilters({ ...filters, [columnName]: value });
  };

  // Filter data based on filters
  const filteredData = data.filter((item) => {
    for (const columnName in filters) {
      const filterValue = filters[columnName].toLowerCase();
      const itemValue = item[columnName]?.toString().toLowerCase();
      if (filterValue && itemValue && !itemValue.includes(filterValue)) {
        return false;
      }
    }
    return true;
  });

  return (
    // Render a table with a given style
    <>
      <label className="table-heading">Statistical Data</label>
      <table style={style}>
        {/* Render the table header with columns*/}
        <TableHeader columns={allKeys} onFilterChange={handleFilterChange} />
        {/* Render the table rows with product data */}
        <TableRows data={filteredData} allKeys={allKeys} />
      </table>
    </>
  );
};

export default Table;
