package com.init.prueba.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.init.prueba.rest.daos.ContratoDAO;
import com.init.prueba.rest.entidades.ContratoEntidad;

@RestController
@RequestMapping("contratos")
public class ContratoREST {

	@Autowired
	private ContratoDAO contratoDao;
	
	@GetMapping //Consultar todos los contratos
	public ResponseEntity<List<ContratoEntidad>> getContratos(){
		List<ContratoEntidad> listaContratos = contratoDao.findAll();
		return ResponseEntity.ok(listaContratos);
	}
	
	@RequestMapping(value="{contratoId}") //Consultar contrato por id
	public ResponseEntity<ContratoEntidad> getContratoById(@PathVariable("contratoId") Long id){
		Optional<ContratoEntidad> contrato = contratoDao.findById(id);
		if (contrato.isPresent()) {
			return ResponseEntity.ok(contrato.get());
		}else {
			return ResponseEntity.noContent().build();
		}
		
	}
	
	@PostMapping //Crear contrato
	public ResponseEntity<ContratoEntidad> crearContrato(@RequestBody ContratoEntidad contratoNuevo){
		ContratoEntidad contratoGenerado = contratoDao.save(contratoNuevo);
		return ResponseEntity.ok(contratoGenerado);
	}
	
	@DeleteMapping(value="{contratoId}") //Eliminar contrato por id
	public ResponseEntity<Void> borrarContrato(@PathVariable("contratoId") Long id){
		contratoDao.deleteById(id);
		return ResponseEntity.ok(null);
	}
	
	@PutMapping //Modificar contrato por id
	public ResponseEntity<ContratoEntidad> modificarContrato(@RequestBody ContratoEntidad contrato){
		Optional<ContratoEntidad> contratoEx = contratoDao.findById(contrato.getTipo_id());
		if (contratoEx.isPresent()) {
			ContratoEntidad contratoModificado = contratoEx.get();
			contratoModificado.setId(contrato.getId());
			contratoModificado.setNombre(contrato.getNombre());
			contratoModificado.setApellido(contrato.getApellido());
			contratoModificado.setCat(contrato.getCat());
			contratoModificado.setEdad(contrato.getEdad());
			contratoModificado.setCargo(contrato.getCargo());
			contratoDao.save(contratoModificado); //Save sirve para crear o modificar
			return ResponseEntity.ok(contratoModificado);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	

}
