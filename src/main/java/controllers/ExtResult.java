package controllers;

import model.Dog;

public class ExtResult {
    private boolean success;
    private Dog data;


    public ExtResult(boolean success, Dog data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Dog getData() {
        return data;
    }

    public void setData(Dog data) {
        this.data = data;
    }
}
