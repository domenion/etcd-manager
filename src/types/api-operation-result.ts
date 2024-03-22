interface ApiOperationResult<T> {
  data: T | undefined;
  loading: boolean;
  error: any;
}
