import { registerComponents } from 'core-ui';
import View from '../components/view';
import Table from '../components/table/Table';
import Loader from '../components/loader';
import FilterButton from '../components/buttons/FilterButton';
import SearchButton from '../components/buttons/SearchButton';
import SortButton from '../components/buttons/SortButton';
import OverflowButton from '../components/buttons/OverflowButton';
import TableCell from '../components/table/TableCell';
import TableColumn from '../components/table/TableColumn';
import TableColumns from '../components/table/TableColumns';
import ControlsBar from '../components/table/ControlsBar';
import TableDragNDrop from '../components/table/TableDragNDrop';
import TableEmpty from '../components/table/TableEmpty';
import TablePagination from '../components/table/TablePagination';
import TableRows from '../components/table/TableRows';
import Nav from '../components/nav';
import Hamburger from '../components/hamburger';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import AppBar from 'react-toolbox/lib/app_bar';
import Accordion from '../components/accordion';
import Drawer from 'react-toolbox/lib/drawer';

const UI = {
  Nav,
  View,
  Table,
  Loader,
  Accordion,
  Drawer,
  Input,
  AppBar,
  Dropdown,
  FilterButton,
  SearchButton,
  SortButton,
  OverflowButton,
  TableCell,
  TableColumn,
  TableColumns,
  ControlsBar,
  TableDragNDrop,
  TableEmpty,
  TablePagination,
  TableRows,
  Hamburger
};

registerComponents(UI);
