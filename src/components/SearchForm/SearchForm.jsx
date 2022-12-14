import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Input, StyledForm, Button } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    query.trim() !== ''
      ? onSubmit(query?.trim().toLowerCase())
      : toast('Please enter your request');
    resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <StyledForm>
        <Input type="text" name="query" placeholder="Search movies"></Input>
        <Button type="submit">Search</Button>
      </StyledForm>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
