package com.isa.model.korisnici;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("MENSIS")
public class MenadzerSistema extends Korisnik{

	public MenadzerSistema() {

	}

}
