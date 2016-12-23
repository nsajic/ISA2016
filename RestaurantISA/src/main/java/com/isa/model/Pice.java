package com.isa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pice")
public class Pice {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "naziv")
	private String nazivPica;

	public Pice() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNazivPica() {
		return nazivPica;
	}

	public void setNazivPica(String nazivPica) {
		this.nazivPica = nazivPica;
	}
	
}
