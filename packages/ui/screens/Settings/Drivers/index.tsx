import DB2 from './DB2';
import MySQL from './MySQL';
import MSSQL from './MSSQL';
import PostgreSQL from './PostgreSQL';
import OracleDB from './OracleDB';
import SQLite from './SQLite';
import SAPHana from './SAPHana';
import CQL from './CQL';
import OmniSci from './OmniSci';

const DriversSettings = {
  DB2,
  MySQL,
  MariaDB: MySQL,
  MSSQL,
  PostgreSQL,
  'AWS Redshift': PostgreSQL,
  OracleDB,
  SQLite,
  SAPHana,
  'Cassandra': CQL,
  OmniSci,
};

export default DriversSettings;