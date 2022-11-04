const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should be able to return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 })
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 })
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined)

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }])
    await favoriteRestaurant.putRestaurant({ id: 1 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }])
    await favoriteRestaurant.putRestaurant({ id: 3 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })

  it('should be able to refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([])
  })

  it('should be able to return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }])
    favoriteRestaurant.putRestaurant({ id: 3 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })

  it('should be able to remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    favoriteRestaurant.putRestaurant({ id: 3 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
    await favoriteRestaurant.deleteRestaurant(1)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }])
    await favoriteRestaurant.deleteRestaurant(3)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }])
  })

  it('should be able to handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    favoriteRestaurant.putRestaurant({ id: 3 })
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
    await favoriteRestaurant.deleteRestaurant(4)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
    await favoriteRestaurant.deleteRestaurant(1)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }])
    await favoriteRestaurant.deleteRestaurant(3)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }])
    await favoriteRestaurant.deleteRestaurant(2)
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([])
  })

  // it('should be able to return the updated restaurant', async () => {
  //   favoriteRestaurant.putRestaurant({ id: 1 })
  //   favoriteRestaurant.putRestaurant({ id: 2 })
  //   favoriteRestaurant.putRestaurant({ id: 1, title: 'restaurant a' })
  //   favoriteRestaurant.putRestaurant({ id: 2, title: 'restaurant b' })
  //   expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1, title: 'restaurant a' })
  //   expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2, title: 'restaurant b' })
  // })

  // it('should be able to throw error if the updated restaurant is not already in the list', async () => {
  //   favoriteRestaurant.putRestaurant({ id: 1 })
  //   favoriteRestaurant.putRestaurant({ id: 2 })
  //   expect(() => favoriteRestaurant.putRestaurant({ id: 3, title: 'restaurant a' })).toThrowError('Gagal memperbarui restoran. Restoran tidak ditemukan')
  // })
}

export { itActsAsFavoriteRestaurantModel }
