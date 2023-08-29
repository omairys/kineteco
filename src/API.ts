/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  dynamicSlug: string,
  productName?: string | null,
};

export type ModelProductConditionInput = {
  dynamicSlug?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  dynamicSlug: string,
  productName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  dynamicSlug?: string | null,
  productName?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePeopleInput = {
  id?: string | null,
  dynamicSlug: string,
  fullName: string,
  title: string,
  description: string,
};

export type ModelPeopleConditionInput = {
  dynamicSlug?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPeopleConditionInput | null > | null,
  or?: Array< ModelPeopleConditionInput | null > | null,
  not?: ModelPeopleConditionInput | null,
};

export type People = {
  __typename: "People",
  id: string,
  dynamicSlug: string,
  fullName: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePeopleInput = {
  id: string,
  dynamicSlug?: string | null,
  fullName?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeletePeopleInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  dynamicSlug?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelPeopleFilterInput = {
  id?: ModelIDInput | null,
  dynamicSlug?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPeopleFilterInput | null > | null,
  or?: Array< ModelPeopleFilterInput | null > | null,
  not?: ModelPeopleFilterInput | null,
};

export type ModelPeopleConnection = {
  __typename: "ModelPeopleConnection",
  items:  Array<People | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dynamicSlug?: ModelSubscriptionStringInput | null,
  productName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPeopleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dynamicSlug?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPeopleFilterInput | null > | null,
  or?: Array< ModelSubscriptionPeopleFilterInput | null > | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePeopleMutationVariables = {
  input: CreatePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type CreatePeopleMutation = {
  createPeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePeopleMutationVariables = {
  input: UpdatePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type UpdatePeopleMutation = {
  updatePeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePeopleMutationVariables = {
  input: DeletePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type DeletePeopleMutation = {
  deletePeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      dynamicSlug: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPeopleQueryVariables = {
  id: string,
};

export type GetPeopleQuery = {
  getPeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPeopleConnection",
    items:  Array< {
      __typename: "People",
      id: string,
      dynamicSlug: string,
      fullName: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnCreatePeopleSubscription = {
  onCreatePeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnUpdatePeopleSubscription = {
  onUpdatePeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnDeletePeopleSubscription = {
  onDeletePeople?:  {
    __typename: "People",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
