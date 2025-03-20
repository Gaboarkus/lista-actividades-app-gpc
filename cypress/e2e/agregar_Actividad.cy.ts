import { e2e } from "../support/constants";

describe('Agregar una Actividad', () => {
  
  it('Verificar que se pueda agregar una nueva activiad en la lista', () => {   
    // Visitar la página principal
   cy.visit('/') 
    
    cy.validacionInicial()    //sustitui con lo que puse en commands.ts

    // Agregar una actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad 1')
    cy.get(e2e.BOTON_AGREGAR).click()

    
    cy.get('[data-cy="u3dd99"]').should('have.text', 'Actividad 1')
    
  })
})