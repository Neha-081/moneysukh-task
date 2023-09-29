/**
 * Type definition for defining columns in a table.
 *
 * @template T - Type of data objects
 */
export type ColumnDefinitionType<T> = {  
    // The key representing the column's data in each data object.
    key: keyof T;
  
    // The header text to display for the column.
    header: string;
  }