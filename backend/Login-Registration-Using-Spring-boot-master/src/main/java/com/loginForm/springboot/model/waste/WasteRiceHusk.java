package com.loginForm.springboot.model.waste;

import javax.persistence.*;

@Entity
@Table(name = "wasteRiceHusk")
public class WasteRiceHusk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @Column
    public int quantity;

    @Column
    public double revenue;

    public WasteRiceHusk() {
    }

    public WasteRiceHusk(long id, int quantity, double revenue) {
        this.id = id;
        this.quantity = quantity;
        this.revenue = revenue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getRevenue() {
        return revenue;
    }

    public void setRevenue(double revenue) {
        this.revenue = revenue;
    }
}
