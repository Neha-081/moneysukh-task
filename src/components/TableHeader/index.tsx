// Define the prop types for the TableHeader component
type TableHeaderProps = {
  columns: Array<any>; // An array of column names to be displayed
  onFilterChange: (column: string, value: string) => void; // Callback function for handling filter changes
};

// Define the TableHeader component
const TableHeader = ({
  columns,
  onFilterChange,
}: TableHeaderProps): JSX.Element => {
  // Handler for filter input changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    columnName: string
  ) => {
    const { value } = e.target;
    // Call the onFilterChange callback with the column name and filter value
    onFilterChange(columnName, value);
  };

  return (
    <thead>
      <tr>
        {/* Map through the 'columns' array to create table header cells */}
        {columns
          ?.filter((el) => el) // Remove any falsy values from the 'columns' array
          ?.map((key) => (
            <th key={key}>
              {key.toLowerCase()}
              <input
                type="text"
                placeholder={`Filter ${key}`} // Placeholder text for the filter input
                onChange={(e) => handleFilterChange(e, key)} // Call 'handleFilterChange' on input change
              />
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
