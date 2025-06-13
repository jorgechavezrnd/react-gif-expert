import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  test('debe mostrar el título GifExpertApp', () => {

    render( <GifExpertApp /> );

    const title = screen.getByText('GifExpertApp');

    expect( title ).toBeTruthy();

  });

  test('debe agregar una nueva categoría', () => {

    render( <GifExpertApp /> );

    const input = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Dragon Ball' } });
    fireEvent.submit(form);

    const titles = screen.getAllByRole('heading', { level: 3 });

    expect( titles.length ).toBeGreaterThan(1);

  });

  test('no debe agregar nueva categoria si ya existe', () => {

    const category = 'Meta';

    render( <GifExpertApp /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect( screen.getAllByText(category).length ).toBe(1);

  });

});
