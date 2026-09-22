import { TestBed } from '@angular/core/testing';

import { BaseApiHttp } from './base-api.http';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('BaseApiHttp', () => {
  let service: BaseApiHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseApiHttp);
  });

  describe('Behavior', () => {
    it('should send a task', async () => {
      //#region ARRANGES
      const expectValueToReturn = {
        "titulo": "teste1",
        "descricao": "descrição teste",
        "id": 1,
        "status": "PENDENTE"
      }
      const titleValue = 'teste1';
      const descriptionValue = 'descrição teste';
      //#endregion

      //#region ACTIONS
      const response = await firstValueFrom(service.AddTask(titleValue, descriptionValue));
      //#endregion

      //#region ASSERTIONS
      expect(service.AddTask).toHaveBeenCalledOnce();
      expect(service.AddTask).toHaveBeenCalledWith(titleValue, descriptionValue);

      expect(service['_httpClient'].post).toHaveBeenCalledOnce()
      expect(service['_httpClient'].post).toHaveBeenCalledWith(
        'https://localhost:8080/tasks',
        {titulo: titleValue, descricao: descriptionValue}
      );

      expect(response).toBe(expectValueToReturn);
      //#endregion
    });

    it('should get a task by id', async () => {
      //#region ARRANGES
      const expectValue = {
        "titulo": "teste",
        "descricao": "descrição teste",
        "id": 1,
        "status": "PENDENTE"
      }
      //#endregion

      //#region ACTIONS
      const addATask = await firstValueFrom(service.AddTask(expectValue.titulo, expectValue.descricao));

      const responseGetTaskById = await firstValueFrom(service.GetTaskById(1));
      //#endregion

      //#region ASSERTIONS
      expect(service.AddTask).toHaveBeenCalledWith(expectValue.titulo, expectValue.descricao);
      expect(addATask).toBe(expectValue);
      expect(service['_httpClient'].post).toHaveBeenCalledExactlyOnceWith(
        'https://localhost:8080/tasks',
        {titulo: expectValue.titulo, descricao: expectValue.descricao}
      )

      expect(service.GetTaskById).toHaveBeenCalledWith(1);
      expect(responseGetTaskById).toBe(expectValue);
      expect(service['_httpClient'].get).toHaveBeenCalledExactlyOnceWith('https://localhost:8080/tasks/1')
      //#endregion
    });

    it('should delete a task by id', async () => {
      //#region ARRANGES

      //#endregion

      //#region ACTIONS
      const response = await firstValueFrom(service.DeleteTaskById(1));
      //#endregion

      //#region ASSERTIONS
      expect(service['_httpClient'].delete).toHaveBeenCalledOnce();
      expect(service['_httpClient'].delete).toHaveBeenCalledWith('http://localhost:8080/tasks/1');

      expect(service.DeleteTaskById).toHaveBeenCalledWith(1);
      //#endregion
    });

    it('should update a task by id', async () => {
      //#region ARRANGES
      const expectValueToSend = {
        "titulo": "teste",
        "descricao": "descrição teste",
        "id": 1,
        "status": "PENDENTE"
      }

      const expectValueToUpdate = {
        "titulo": "teste1",
        "descricao": "descrição teste",
        "id": 1,
        "status": "PENDENTE"
      }
      //#endregion

      //#region ACTIONS
      const defineATask = await firstValueFrom(service.AddTask(expectValueToSend.titulo, expectValueToSend.descricao))
      const updateATask = await firstValueFrom(service.UpdateTaskById(1, expectValueToUpdate))
      //#endregion

      //#region ASSERTIONS
      expect(service.AddTask).toHaveBeenCalledOnce();
      expect(service.AddTask).toHaveBeenCalledExactlyOnceWith(expectValueToSend.titulo, expectValueToSend.descricao);
      expect(defineATask).toBe(expectValueToSend);
      expect(service['_httpClient'].post).toHaveBeenCalledExactlyOnceWith(
        'http://localhost:8080/tasks',
        {titulo: expectValueToSend.titulo, descricao: expectValueToSend.descricao}
      )

      expect(service.UpdateTaskById).toHaveBeenCalledOnce();
      expect(service.UpdateTaskById).toHaveBeenCalledExactlyOnceWith(1, expectValueToUpdate);
      expect(updateATask).toBe(expectValueToUpdate);
      expect(service['_httpClient'].put).toHaveBeenCalledExactlyOnceWith(
        'http://localhost:8080/tasks/1',
        expectValueToUpdate
      )
      //#endregion
    });
  });

});
