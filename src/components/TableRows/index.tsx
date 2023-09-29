import { Key, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TableRowsProps<T> = {
  data: Array<T>;
  allKeys: any;
};
/**
 * Represents a single row of data in the table.
 *
 * @param {object} props - Props containing label and data to display in the row.
 * @returns {JSX.Element} - JSX element representing a data row.
 */

/**
 * Component for rendering the rows of the statistical table.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects to calculate statistics for
 * @param {TableRowsProps<T, K>} props - Props containing product and statistical data.
 * @returns {JSX.Element} - JSX element representing the table rows.
 */

const TableRows = <T, K extends keyof T>({
  data,
  allKeys,
}: TableRowsProps<T>): JSX.Element => {
  const [mainData, setMainData] = useState<any>([]);

  useEffect(() => {
    // Map through the 'data' array and add a 'uuid' property using uuidv4()
    const withId = data.map((item) => ({
      ...item,
      uuid: uuidv4(),
    }));
    // Set the 'withId' data to the 'mainData' state variable
    setMainData(withId);
  }, [data]);

  return (
    <tbody>
      {data?.map((item: any, index) => (
        <tr key={index}>
          {allKeys.map((elem: any) => (
            <td key={elem}>{item[elem]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
