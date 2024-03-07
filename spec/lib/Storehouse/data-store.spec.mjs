import { DataStore } from "../../../src/js/lib/Storehouse/index.mjs";

describe('DataStore', () => {
    describe('it should be a static class - ', () => {
        it('should not be able to be instantiated', () => {
            expect( () => new DataStore ).toThrow();
        })
    })
    describe('providers should be able to be registered', () => {
        it('should provide a "hasProvider(key)" method', () => {
            expect(DataStore.hasOwnProperty('hasProvider')).toBe(true);
            expect(typeof DataStore.hasProvider).toBe('function');
        });
        it('should allow registration of a provider for a single value', () => {
            DataStore.registerProvider('test', 0);
            expect(DataStore.storage.has('test')).toBeTruthy();
            expect(DataStore.storage.get('test').value).toEqual(0);
        });
        it('should allow registration of a provider for an array of values', () => {
            DataStore.registerArrayProvider('test');
        })
    });
    describe('subscribers should be able to be registered', () => {
        
    });
});