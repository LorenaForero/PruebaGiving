package com.init.prueba.rest.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="contratos")
public class ContratoEntidad {
	
	@Id
	@Column(name="tipo_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long tipo_id;
	
	@Column(name="id", nullable = false)
	private Long id;
	
	@Column(name="nombre",nullable = false, length = 20)
	private String nombre;
	
	@Column(name="apellido",nullable = false, length = 30)
	private String apellido;
	
	@Column(name="cat", length = 1)
	private Character cat;
	
	@Column(name="edad")
	private Byte edad;
	
	@Column(name="cargo", length = 30)
	private String cargo;

	public Long getTipo_id() {
		return tipo_id;
	}

	public void setTipo_id(Long tipo_id) {
		this.tipo_id = tipo_id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Character getCat() {
		return cat;
	}

	public void setCat(Character cat) {
		this.cat = cat;
	}

	public Byte getEdad() {
		return edad;
	}

	public void setEdad(Byte edad) {
		this.edad = edad;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	
	

}
